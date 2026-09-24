'use client';

import { useEffect } from 'react';
import { bindFriendMoves } from './friend-moves';

/**
 * Wires the friends' signature moves on a server-rendered page (the mascots
 * pages): any `[data-friend-move]` host plays its move on hover, keyboard
 * focus or a tap. See components/friend-moves.ts. Renders nothing.
 */
export function FriendMoves() {
  useEffect(() => bindFriendMoves(), []);
  return null;
}
