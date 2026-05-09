export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    email?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    content?: string;
    tags?: string;
    author?: Author;
    category?: Category;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}