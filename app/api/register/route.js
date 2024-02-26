import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { fName, lName, email, password } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);

    console.log('fName: ', fName);
    console.log('lName: ', lName);
    console.log('email: ', email);
    console.log('password: ', password);

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
