import { RouteConfig } from 'vue-router'

export class Router {
  private static routes: RouteConfig[] = []

  public static addRoutes (routes: RouteConfig[]) {
    this.routes.push(...routes)
  }

  public static getRoutes (): RouteConfig[] {
    return this.routes
  }
}
