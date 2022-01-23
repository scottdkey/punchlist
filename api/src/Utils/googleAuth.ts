import { OAuth2Client, TokenPayload } from "google-auth-library";
import { GOOGLE_CLIENT_ID as CLIENT_ID } from "../constants"



const client = new OAuth2Client(CLIENT_ID)

export async function verify(token: string): Promise<TokenPayload | null> {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [CLIENT_ID!],
    })
    const payload = ticket.getPayload();
    if (payload) {
      return payload
    } else {
      return null
    }

  } catch (e) {
    console.error("Verify Google Token Error:", e)
    return null
  }
}