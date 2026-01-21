import { comments } from "../data";

export async function GET(
  request: Request, // Prefix with underscore if the request object is unused
  context: { params: Promise<{ id: string }> } // Define params as a Promise
) {
  // Await the promise and destructure the ID property
  const { id } = await context.params;

  // Search the array for a comment matching the provided ID
  const comment = comments.find(
    (comment) => comment.id === parseInt(id)
  );

  

  // Return the specific comment as a JSON response to the client
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  const deletedComment = comments.splice(index, 1);

  return Response.json(deletedComment[0]);
}

