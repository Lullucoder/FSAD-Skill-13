# Frontend (React + Vite)

This frontend is prepared for **Skill-13 Full-Stack Deployment** and is integrated with the Spring Boot backend.

## Environment Variables

Create/update these files as needed:

- `.env.development`
- `.env.production`

Variables:

- `VITE_API_BASE_URL` - API host (keep empty for same-host deployment)
- `VITE_APP_TITLE` - app title shown in the UI

## Commands

```bash
npm install
npm run dev
npm run build
npm run build:deploy
```

- `npm run dev` starts React dev server at `http://localhost:5173`
- `npm run build:deploy` builds frontend and copies artifacts to `../backend/src/main/resources/static`

## Deployment Flow

1. Build frontend
2. Copy build into Spring Boot static folder
3. Run Spring Boot app (`mvnw spring-boot:run`)
4. Access app at `http://localhost:8080`
