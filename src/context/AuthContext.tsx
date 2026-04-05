import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('yogalax_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Basic validation
    const users = JSON.parse(localStorage.getItem('yogalax_registered_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name };
      setUser(userData);
      localStorage.setItem('yogalax_user', JSON.stringify(userData));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const register = async (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem('yogalax_registered_users') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem('yogalax_registered_users', JSON.stringify(users));
    
    // Auto login after register
    const userData = { email, name };
    setUser(userData);
    localStorage.setItem('yogalax_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('yogalax_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
