const { default: axios } = require("axios");


export async function POST(request) {
    let { text } = await request.json();

    const res = await axios.post(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL, {
        text: text || "Someone is at the gates!",
        channel: "#doorbell"
    })

    console.log(res)

    return new Response(JSON.stringify({ error: res.error }), {
      status: res.success ? 200 : 500,
      headers: {
        "Content-Type": "application/json",
      },
    });

}