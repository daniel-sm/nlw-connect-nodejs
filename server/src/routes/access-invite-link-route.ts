import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/acess-invite-link'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Invite link and redirects user',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLink({ subscriberId })

      const redirectURL = new URL(env.WEB_URL)

      redirectURL.searchParams.set('referrer', subscriberId)

      // 301: redirect permanente
      // 302: redirect temporario

      return reply.redirect(redirectURL.toString(), 302)
    }
  )
}
