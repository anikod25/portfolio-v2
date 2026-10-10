export const projectPresentationMotion: Record<string, {
  initial: { opacity: number; x?: number; y?: number; scale?: number; clipPath?: string }
  exit: { opacity: number; x?: number; y?: number; scale?: number; clipPath?: string }
}> = {
  AEGIS: { initial: { opacity: 0, scale: .97 }, exit: { opacity: 0, scale: .985 } },
  KIRA: { initial: { opacity: 0, x: 12 }, exit: { opacity: 0, x: -8 } },
  WILHELM: { initial: { opacity: 0, clipPath: 'inset(0 0 12% 0)' }, exit: { opacity: 0, clipPath: 'inset(0 0 0 12%)' } },
  SECURENITE: { initial: { opacity: 0, y: 8 }, exit: { opacity: 0, y: -5 } },
  CONTAINERCRAFT: { initial: { opacity: 0, clipPath: 'inset(0 12% 0 0)' }, exit: { opacity: 0, clipPath: 'inset(0 0 0 12%)' } },
}
