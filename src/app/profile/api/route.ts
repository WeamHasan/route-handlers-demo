import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const theme = request.cookies.get("theme");

    console.log(requestHeaders.get("Authorization"));
    console.log(theme);

    return new Response("<h1>Profile Data</h1>", {
        status: 200,
        headers: {
            "Content-Type": "text/html", 
            "Set-Cookie": "theme=dark",
        },
    });
}




//TODO: Another method to request headers


// import { headers } from "next/headers";

// export async function GET() {
//   const headersList = headers();
//   console.log(headersList.get("Authorization"));

//   return new Response("Profile API data");
// }