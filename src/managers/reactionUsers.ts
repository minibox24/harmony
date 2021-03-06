import { Client } from '../models/client.ts'
import { MessageReaction } from '../structures/messageReaction.ts'
import { UsersManager } from './users.ts'

export class ReactionUsersManager extends UsersManager {
  reaction: MessageReaction

  constructor(client: Client, reaction: MessageReaction) {
    super(client)
    this.cacheName = `reaction_users:${reaction.message.id}`
    this.reaction = reaction
  }
}
