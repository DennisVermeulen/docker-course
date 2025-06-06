# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a Docker course repository demonstrating container evolution from basic single-container apps to production-ready multi-service architectures. The repository teaches Docker concepts through progressive complexity across multiple example projects.

## Project Structure

The repository contains educational Docker projects organized by complexity:

- `mini-node/`: Basic Node.js containerization with Dockerfile best practices labs
- `mini-node-postgres-app/`: Multi-container app with PostgreSQL (baseline)
- `mini-node-postgres-app-network/`: Focus on Docker networking concepts
- `mini-node-postgres-app-volume/`: Emphasis on persistent storage and volumes
- `portainer/`: Container management interface setup

## Common Development Commands

### Building and Running Projects

Each project directory contains its own README with specific commands. Common patterns:

```bash
# Multi-container applications
docker-compose up -d
docker-compose logs -f
docker-compose down

# Single container builds
docker build --platform linux/arm64 -t <image-name> .
docker run -p 3000:3000 <image-name>

# Volume and network management
docker volume ls
docker network ls
docker system prune -a --volumes
```

### Lab Exercises (mini-node/lab*)

```bash
# Dockerfile comparison labs
docker build -f Dockerfile-bad --platform linux/arm64 -t mini-node:lab1bad .
docker build -f Dockerfile-good --platform linux/arm64 -t mini-node:lab1good .

# Check build cache efficiency
docker buildx build -f Dockerfile-good --platform linux/arm64 -t mini-node:lab1good .
```

## Architecture Patterns

### Docker Compose Configuration

All multi-service projects follow consistent patterns:
- PostgreSQL service named `db` with health checks using `pg_isready`
- Node.js apps connect to database using hostname `db`
- Environment variables loaded from `.env` files
- Health-based service dependencies with `depends_on`
- Standard ports: 3000 (app), 5432 (database)

### Application Structure

Node.js applications follow consistent patterns:
- Express.js REST APIs with `/` (action) and `/visits` (data) endpoints
- PostgreSQL connection using `pg.Pool` with environment-based configuration
- Automatic table creation with `CREATE TABLE IF NOT EXISTS`
- Error handling with JSON responses and appropriate HTTP status codes

### Dockerfile Best Practices

The repository demonstrates layer optimization:
- **Bad**: `COPY . .` before `RUN pip install` (invalidates cache on code changes)
- **Good**: `COPY requirements.txt .` → `RUN pip install` → `COPY . .` (preserves dependency cache)
- Use Alpine Linux images for smaller footprints
- Consistent `WORKDIR /app` across all containers

## Key Docker Concepts Demonstrated

- **Networking**: Evolution from default bridge to custom networks
- **Volumes**: Progression from no persistence to named volumes and bind mounts  
- **Multi-stage awareness**: Efficient layering and caching strategies
- **Service orchestration**: Health checks, dependencies, and service discovery
- **Environment management**: 12-factor app compliance with environment-based configuration

## Technologies Used

- **Node.js**: v20-alpine runtime
- **PostgreSQL**: v16-alpine database
- **Python**: 3.12-slim (for lab exercises)
- **Express.js**: Web framework for REST APIs
- **Docker Compose**: Multi-container orchestration
- **Portainer**: Web-based Docker management