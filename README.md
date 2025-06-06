# Docker Evolution Course

A comprehensive journey from local development to production-ready containerized applications.

## Overview

This course demonstrates the natural evolution path that every developer follows when adopting Docker in production environments:

1. **Single Container** - Start with your first Docker image on your local machine
2. **Multi-Container Applications** - Coordinate multiple services with Docker Compose
3. **Production Orchestration** - Scale to multiple VMs requiring container orchestrators

Each stage builds upon the previous, teaching core concepts through hands-on examples using Node.js, PostgreSQL, and modern Docker practices.

## Course Structure

### 🏗️ Foundation Projects

| Project | Focus | Key Concepts |
|---------|-------|-------------|
| [`mini-node/`](./mini-node/) | Basic containerization | Dockerfile best practices, layer optimization |
| [`mini-node-postgres-app/`](./mini-node-postgres-app/) | Multi-service basics | Service communication, health checks |
| [`mini-node-postgres-app-network/`](./mini-node-postgres-app-network/) | Networking | Custom networks, service discovery |
| [`mini-node-postgres-app-volume/`](./mini-node-postgres-app-volume/) | Data persistence | Named volumes, bind mounts |
| [`portainer/`](./portainer/) | Container management | Registry setup, web-based management |

### 📚 Core Topics Covered

- ✅ **Dockerfile Best Practices** - Layer caching, multi-stage builds, security
- ✅ **Resource Management** - Limits, monitoring, optimization
- ✅ **Networking** - Bridge networks, custom networks, service mesh concepts
- ✅ **Storage & Volumes** - Persistent data, backup strategies
- ✅ **Container Orchestration** - Introduction to Swarm, Nomad, Kubernetes

### 🎯 Why Containers?

This course emphasizes the **12-factor app methodology** and modern DevOps practices:

- **Build, Ship, Run** - Consistent environments across development lifecycle
- **Reduced Dependencies** - Less coordination between teams and infrastructure
- **Self-Service DevOps** - Development teams own their containerization strategy
- **Scalability** - From single containers to orchestrated production systems

## Quick Start

1. **Prerequisites**: Docker and Docker Compose installed
2. **Begin with basics**: Start in [`mini-node/`](./mini-node/) for Dockerfile fundamentals
3. **Progress sequentially**: Each project builds on previous concepts
4. **Run examples**: Every directory contains a README with specific instructions

```bash
# Example: Start with the basic multi-service app
cd mini-node-postgres-app
docker-compose up -d
curl http://localhost:3000
```

## Container Orchestration Path

The course covers the progression toward production orchestration:

- **Docker Swarm** - Docker's native clustering
- **HashiCorp Nomad** - Lightweight workload orchestrator  
- **Kubernetes** - Production-grade container orchestration
  - Managed services: EKS (AWS), AKS (Azure), GKE (Google Cloud)
  - Platforms: Rancher, OpenShift
