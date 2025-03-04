import { redis } from '../redis/client'

interface GetSubcriberInviteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubcriberInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
