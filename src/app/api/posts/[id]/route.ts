import {NextResponse} from "next/server";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export async function DELETE(req: Request, {params}: { params: { id: string } }) {
  const id = params.id;

  // logic delete post
  // redirect('/blog')

  const cookiesList =  await cookies();
  const coo2 = cookiesList.get('Cookie_2')?.value;

  return NextResponse.json({ id, coo2 });
}
