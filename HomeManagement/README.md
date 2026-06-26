# HomeManagement (Angular SPA)

This repository will host a simple Angular single-page application (SPA) to manage household items across five domains: Home Appliances, Vehicles, Home Maintenance, Financials, and Medical. Data is stored in `localStorage` and the app supports CRUD operations (add/edit/delete).

Quick start (when Angular CLI scaffolded locally):

```bash
# Install Angular CLI if you haven't
npm install -g @angular/cli

# Create the project (run locally)
ng new home-management --routing --style=css
cd home-management
# Copy the files from this repo into the Angular project
npm install
ng serve
```

Project structure (partial):
```
src/
  app/
    core/
      data.models.ts
      storage.service.ts
    services/
      appliances.service.ts
  assets/
  index.html
  styles.css
README.md
PLAN.md
```

Next steps:
- Run the Angular CLI scaffold locally and merge these core files into `src/app`.
- Generate components and routes: `ng g c pages/appliances/list` etc.
- Start the app with `ng serve` and iterate.

