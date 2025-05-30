import { User, Vendor } from '../types';

export const TEST_USERS = {
  customer: {
    email: 'customer@test.com',
    password: 'test123',
    user: {
      id: 'cust1',
      email: 'customer@test.com',
      name: 'Test Customer',
      role: 'customer' as const,
      createdAt: new Date().toISOString()
    }
  },
  vendor: {
    email: 'vendor@test.com',
    password: 'test123',
    user: {
      id: 'vend1',
      email: 'vendor@test.com',
      name: 'Test Vendor',
      role: 'vendor' as const,
      createdAt: new Date().toISOString()
    },
    vendorDetails: {
      id: 'v1',
      userId: 'vend1',
      storeName: 'Test Store',
      description: 'A test vendor store',
      status: 'approved' as const,
      products: [],
      earnings: 0,
      rating: 4.5,
      createdAt: new Date().toISOString()
    }
  },
  admin: {
    email: 'admin@test.com',
    password: 'test123',
    user: {
      id: 'adm1',
      email: 'admin@test.com',
      name: 'Test Admin',
      role: 'admin' as const,
      createdAt: new Date().toISOString()
    }
  }
};