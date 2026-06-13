# Docker & Next.js Deployment Guide

This guide explains the Docker setup, Next.js features, and how they work together for production deployment.

---

## What is Docker?

**Docker** is a containerization tool that packages your entire application with all its dependencies into a single unit called a **container**. Think of it as a self-contained box with everything needed to run your app (Node.js, dependencies, code, etc.).

### Why Docker?
- ✅ **Consistency**: Works the same on your laptop, your server, or cloud
- ✅ **Isolation**: Doesn't interfere with other apps on your server
- ✅ **Easy deployment**: Just run one command, and it's deployed
- ✅ **Scalability**: Can run multiple containers of the same app

---

## Next.js Features Explained

### 1. **App Router** (`src/app`)

Next.js 13+ uses the **App Router** (file-based routing) instead of the older Pages Router.

```
src/app/
├── page.tsx          → / (homepage)
├── about/page.tsx    → /about
├── shop/page.tsx     → /shop
└── shop/[slug]/page.tsx  → /shop/product-name (dynamic route)
```

**How it works:**
- Each `page.tsx` file becomes a route
- `[slug]` is a **dynamic segment** - accepts any value in the URL
- Automatically generates the URL structure

### 2. **Server Components** (Default in App Router)

All components in `src/app` are **Server Components** by default.

```typescript
// src/app/page.tsx - This runs on the SERVER
export default function Home() {
  // Can access databases directly, no API needed
  // More secure - no secrets exposed to browser
  return <h1>Welcome</h1>
}
```

**Benefits:**
- No JavaScript sent to browser (faster)
- Can query databases directly
- Keep secrets secure (API keys, passwords never exposed)

### 3. **Client Components** (`"use client"`)

When you need interactivity, use Client Components:

```typescript
// src/components/sections/HeroSection.tsx
'use client'  // This component runs in the BROWSER

import { useState } from 'react'

export default function HeroSection() {
  const [count, setCount] = useState(0)
  
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}
```

**When to use:**
- Event listeners (onClick, onChange, etc.)
- `useState`, `useEffect`, `useContext` hooks
- Browser APIs (localStorage, window, etc.)

### 4. **API Routes** (`src/app/api`)

Create backend endpoints without a separate server:

```typescript
// src/app/api/create-order/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  
  // Process payment with Razorpay
  // Create order in database
  
  return Response.json({ orderId: '123' })
}
```

**Available in your project:**
- `/api/contact` - Contact form submissions
- `/api/create-order` - Create Razorpay orders
- `/api/verify-payment` - Verify payments
- `/api/create-shipment` - Shiprocket integration
- `/api/quote` - Generate quotes

### 5. **Static Generation** (Pre-rendering)

Next.js pre-builds pages at build time for faster performance:

```typescript
// src/app/blog/[slug]/page.tsx
export const revalidate = 3600 // Regenerate every 1 hour

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  return { title: post.title }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  return <article>{post.content}</article>
}
```

**Benefits:**
- Pages generated once, served millions of times
- Super fast (no database queries on request)
- Good for SEO (HTML available immediately)

### 6. **Image Optimization** (`next/image`)

Next.js automatically optimizes images:

```typescript
import Image from 'next/image'

export default function ProductImage() {
  return (
    <Image
      src="/images/hamper.jpg"
      alt="Premium Hamper"
      width={400}
      height={300}
      priority // Load immediately (for above-fold images)
    />
  )
}
```

**What happens:**
- Images automatically resized for different screen sizes
- Converts to WebP (faster format)
- Lazy loads by default (only loads when needed)
- Result: Smaller images, faster load times

### 7. **Built-in CSS** (Tailwind)

Your `tailwind.config.ts` enables utility-first CSS:

```typescript
// In any component
<div className="bg-blue-500 p-4 rounded-lg">
  This is blue with padding and rounded corners
</div>
```

### 8. **Environment Variables**

Secure way to manage configuration:

```typescript
// next.config.ts
env: {
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
}

// In component (must be in next.config.ts or .env.local)
const razorpayKey = process.env.RAZORPAY_KEY_ID
```

**Key difference:**
- Variables starting with `NEXT_PUBLIC_` are sent to browser
- Others stay on server (secure for secrets)

---

## Dockerfile Explained

```dockerfile
# BUILD STAGE - Happens once
FROM node:20-alpine AS builder
# Start with a lightweight Node.js image

WORKDIR /app
# Set working directory

COPY package.json package-lock.json* yarn.lock* ./
# Copy dependency files

RUN npm ci || yarn install
# Install dependencies

COPY . .
# Copy your code

RUN npm run build || yarn build
# Build Next.js app (optimization happens here)
```

**What `npm run build` does:**
1. Compiles TypeScript to JavaScript
2. Optimizes components
3. Pre-renders static pages
4. Creates the `.next` folder with everything ready

```dockerfile
# PRODUCTION STAGE - The actual running container
FROM node:20-alpine
# Fresh image (smaller, without build tools)

WORKDIR /app

RUN apk add --no-cache dumb-init
# Tool to handle signals properly (clean shutdowns)

COPY --from=builder /app/public ./public
# Copy static files (images, fonts)

COPY --from=builder /app/.next/standalone ./
# Copy built app

COPY --from=builder /app/.next/static ./.next/static
# Copy static assets

EXPOSE 3000
# Tell Docker this container uses port 3000

CMD ["node", "server.js"]
# Run the built app
```

**Why two stages?**
- **Build stage**: Contains compilers, tools (large)
- **Production stage**: Only runtime, no tools (small)
- Result: Smaller Docker image, faster deployment

---

## Docker Compose Explained

`docker-compose.yml` runs multiple containers together:

```yaml
version: '3.8'
# Version compatibility

services:
  app:
    build: .
    # Build from Dockerfile
    
    container_name: doxora-app
    # Friendly name
    
    ports:
      - "3000:3000"
    # Port mapping: "host:container"
    # Access at http://localhost:3000
    
    environment:
      - NODE_ENV=production
    # Environment variables
    
    restart: unless-stopped
    # Always restart if crashes
    
    networks:
      - doxora-network
    # Connect to network (talk to other containers)
```

### Nginx Service

```yaml
  nginx:
    image: nginx:alpine
    # Use official Nginx image
    
    ports:
      - "80:80"
      - "443:443"
    # Public-facing ports
    
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    # Mount config file (ro = read-only)
```

**Why Nginx?**
- Acts as **reverse proxy** (frontend door)
- Handles HTTPS/SSL certificates
- Manages load balancing if you have multiple app instances
- Serves static files efficiently

---

## Nginx Config Explained

```nginx
upstream doxora {
    server app:3000;
}
# Define where requests go (to app container on port 3000)

server {
    listen 80;
    # Listen on port 80 (HTTP)
    
    location / {
        proxy_pass http://doxora;
        # Forward requests to app
        
        proxy_set_header Host $host;
        # Pass original host name to app
        
        proxy_set_header X-Real-IP $remote_addr;
        # Pass client's real IP
    }
}
```

**Flow:**
```
User's Browser
    ↓ (port 80)
Nginx (reverse proxy)
    ↓ (port 3000)
Next.js App (inside container)
```

---

## Deployment Flow

### 1. **Build Phase** (Development)
```bash
npm run build
# Creates optimized `.next` folder
# Only happens once
```

### 2. **Docker Build** (Your Server)
```bash
docker build -t doxora-app:latest .
# Creates container image from Dockerfile
# Uses `.next` from build phase
```

### 3. **Docker Run** (Deployment)
```bash
docker-compose up -d
# Starts containers in background
# App ready at http://localhost
```

---

## Key Next.js Performance Features

### 1. **Code Splitting**
- Only JavaScript needed for current page is sent
- Other pages loaded when needed
- Smaller initial load

### 2. **Static Optimization**
```typescript
// This page pre-renders at build time
// Served as plain HTML (fastest possible)
export const revalidate = false
export default function About() { ... }
```

### 3. **ISR - Incremental Static Regeneration**
```typescript
// Page generated once, then regenerated every hour
export const revalidate = 3600
export default function Blog() { ... }
```

### 4. **Automatic Font Optimization**
```typescript
import { Inter } from 'next/font/google'
// Fonts self-hosted (no external requests)
```

---

## Production Checklist

Before deploying:

- [ ] Update `.env.production` with real API keys
- [ ] Set `NODE_ENV=production`
- [ ] Configure domain in `nginx.conf`
- [ ] Set up SSL certificates
- [ ] Test with `docker build .`
- [ ] Test with `docker-compose up`

---

## Useful Commands

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop everything
docker-compose down

# Rebuild image
docker-compose up -d --build

# Remove old images
docker image prune -a

# Connect to running container
docker exec -it doxora-app sh
```

---

## Your Project's Features

Your Doxora e-commerce platform uses:

1. **Server Components** for product listings (fast, secure)
2. **Client Components** for shopping cart (`CartProvider.tsx`)
3. **API Routes** for Razorpay payments
4. **Images** from Unsplash (optimized via Next.js)
5. **TypeScript** for type safety
6. **Tailwind CSS** for styling
7. **Dynamic Routes** for products (`/shop/[slug]`)

All bundled in a Docker container for easy deployment! 🚀

---

## Next Steps

1. Add environment variables to `.env.production`
2. Test locally: `docker-compose up`
3. Push to server and run `./deploy.sh`
4. Monitor with `docker-compose logs -f`

Feel free to ask about any specific part!
