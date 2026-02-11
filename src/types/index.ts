export type UserRole = 'OWNER' | 'KASIR' | 'ADMIN';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface Category {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _count: {
        menus: number;
    }
}

export interface Menu {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl?: string | null;
    categoryId: string;
    category: Category;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

