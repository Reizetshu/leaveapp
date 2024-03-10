import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
  try {
    const { fName, lName, email, password, isAdmin } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({
      fName,
      lName,
      email,
      password: hashedPassword,
      isAdmin,
    });

    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while registering the user.',
      },
      { status: 500 }
    );
  }
};
