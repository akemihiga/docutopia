export interface SidebarGroup {
  group: string;
  endpoints: {
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    summary: string;
    path: string;
  }[];
}

export interface Param {
  name: string;
  description?: string;
  type: string;
  required?: string[];
  properties?: Param[];
}

export interface BodyParam {
  properties: Param[];
  required?: string[];
}
