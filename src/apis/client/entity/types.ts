import { Entity } from "@/enums/entity";

export type RequestListProps = {
  entity: Entity,
  page: number,
  page_size: number,
  sort?: string,
  filter?: object,
  keywords?: string,
}

export type RequestDetailProps = {
  entity: Entity,
  id: string,
}