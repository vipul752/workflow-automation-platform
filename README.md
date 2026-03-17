# Workflow Builder

A comprehensive workflow automation platform built with a monorepo architecture. This project enables users to create, manage, and automate custom workflows using triggers and actions.

## Project Structure

```
workflow-builder/
├── frontend/          # Next.js frontend application
├── hooks/             # Prisma hooks and utilities
├── primary-backend/   # Main backend service (API, routing)
├── processors/        # Workflow processing service
├── workers/           # Background workers (email, Solana, parsers)
```

## Packages Overview

### Frontend

Next.js-based web application with TypeScript support.

- **Location**: `./frontend`
- **Key Features**:
  - Dashboard for workflow management
  - Login/Signup pages
  - Zap creation and management
  - Tailwind CSS styling
- **Setup**: `cd frontend && npm install`

### Hooks

Prisma ORM utilities and generated types.

- **Location**: `./hooks`
- **Contains**: Prisma schema, migrations, and generated client types
- **Setup**: `cd hooks && npm install && npx prisma generate`

### Primary Backend

Main backend service handling API routes and user management.

- **Location**: `./primary-backend`
- **Key Features**:
  - User authentication and management
  - Zap (workflow) management
  - Action and trigger routing
  - Database integration
- **Setup**: `cd primary-backend && npm install`

### Processors

Service for processing and executing workflows.

- **Location**: `./processors`
- **Purpose**: Handle workflow execution and logic

### Workers

Background worker service for async tasks.

- **Location**: `./workers`
- **Key Features**:
  - Email service
  - Solana blockchain integration
  - Parser utilities

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Database (PostgreSQL recommended)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd workflow-builder
```

2. Install dependencies for all packages

```bash
# Frontend
cd frontend && npm install && cd ..

# Hooks
cd hooks && npm install && cd ..

# Primary Backend
cd primary-backend && npm install && cd ..

# Processors
cd processors && npm install && cd ..

# Workers
cd workers && npm install && cd ..
```

3. Set up the database

```bash
cd primary-backend
npx prisma migrate dev
cd ..
```

4. Generate Prisma client

```bash
cd hooks
npx prisma generate
cd ..
```

## Development

### Running the Frontend

```bash
cd frontend
npm run dev
# Open http://localhost:3000
```

### Running the Backend

```bash
cd primary-backend
npm run dev
```

### Database Management

```bash
# Run migrations
cd primary-backend
npx prisma migrate dev

# View database in Prisma Studio
npx prisma studio
```

## Architecture

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js/Express-based API
- **Database**: Prisma ORM with PostgreSQL
- **Workers**: Background job processing for async operations

## Key Features

- **Workflow Creation**: Create custom workflows (Zaps) with triggers and actions
- **Trigger Management**: Define workflow triggers
- **Action Management**: Configure workflow actions
- **User Management**: Authentication and user management
- **Background Processing**: Async job processing with workers
- **Blockchain Integration**: Solana integration for Web3 workflows

## File Structure Details

- `schema.prisma`: Database schema definition
- `migrations/`: Database migration history
- `router/`: API route handlers
- `types/`: TypeScript type definitions
- `src/`: Source code for each service

## Database Schema

Key models:

- **User**: User accounts
- **Zap**: Workflow definitions
- **Trigger**: Workflow triggers
- **Action**: Workflow actions
- **AvailableTrigger**: Available trigger types
- **AvailableAction**: Available action types
- **ZapRun**: Workflow execution records
- **ZapRunOutbox**: Outbox pattern for reliable processing

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Submit a pull request

## License

[Add your license here]

## Support

For questions or issues, please create an issue in the repository.
