'use client';

import { useState, useRef, useEffect } from 'react';

// 音频源：信乐团「天高地厚 - 信乐团」网易云音乐外链
// 注意：第三方外链稳定性不保证，建议后续下载到本地 public/music/ 目录
const AUDIO_URL = 'https://music.163.com/song/media/outer/url?id=387583';
const SONG_NAME = '天高地厚';
const ARTIST_NAME = '信乐团';

interface MusicPlayerProps {
  variant?: 'navbar' | 'floating';
}

// 音量图标组件（提升到外部，避免每次渲染重建）
function VolumeIcon({ isMuted, volume }: { isMuted: boolean; volume: number }) {
  if (isMuted || volume === 0) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    );
  }
  if (volume < 0.5) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

// 音波动画条组件
function SoundWaves({ isPlaying, count = 4, barHeight = 12 }: { isPlaying: boolean; count?: number; barHeight?: number }) {
  return (
    <div className="flex items-end gap-[2px]" style={{ height: barHeight }}>
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="w-[2px] bg-[#d4af37] rounded-full"
          style={{
            height: isPlaying ? undefined : '3px',
            animation: isPlaying
              ? `soundWave 0.8s ease-in-out ${i * 0.15}s infinite`
              : undefined,
            opacity: isPlaying ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

export function MusicPlayer({ variant = 'navbar' }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);

  // 初始化音量、跨域设置
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      // @ts-expect-error referrerPolicy 在类型定义中可能不存在，但浏览器支持
      audioRef.current.referrerPolicy = 'no-referrer';
      audioRef.current.crossOrigin = 'anonymous';
    }
  }, []);

  // 音量变化
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log('播放失败，请手动操作');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // 导航栏内联样式（紧凑）
  if (variant === 'navbar') {
    return (
      <>
        <audio
          ref={audioRef}
          src={AUDIO_URL}
          loop
          preload="metadata"
        />

        <div className="flex items-center gap-2.5 pl-3 border-l border-[rgba(212,175,55,0.2)]">
          {/* 播放/暂停按钮 - 小尺寸 */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center text-[#0a0e1a] hover:scale-105 active:scale-95 transition-transform shadow-md shadow-[rgba(212,175,55,0.25)] relative group"
            aria-label={isPlaying ? '暂停' : '播放'}
            title={isPlaying ? '暂停' : '播放'}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            )}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full animate-ping bg-[#d4af37]/30" />
            )}
          </button>

          {/* 歌曲信息 + 音波 */}
          <div className="hidden sm:flex flex-col justify-center leading-tight">
            <span className="text-[#f1f5f9] text-[13px] font-medium">
              {SONG_NAME}
            </span>
            <span className="text-[#64748b] text-[10px] mt-0.5">
              {ARTIST_NAME}
            </span>
          </div>

          {/* 音波动画 */}
          <div className="hidden sm:block">
            <SoundWaves isPlaying={isPlaying} count={4} barHeight={12} />
          </div>

          {/* 静音按钮 */}
          <button
            onClick={toggleMute}
            className="text-[#94a3b8] hover:text-[#d4af37] transition-colors p-1"
            aria-label={isMuted ? '取消静音' : '静音'}
            title={isMuted ? '取消静音' : '静音'}
          >
            <VolumeIcon isMuted={isMuted} volume={volume} />
          </button>
        </div>
      </>
    );
  }

  // 浮动样式（保留作为备用）
  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop
        preload="metadata"
      />

      <div className="fixed bottom-6 right-6 z-50">
        <div className="glass rounded-2xl border border-[rgba(212,175,55,0.25)] shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3">
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center text-[#0a0e1a] hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[rgba(212,175,55,0.3)] group relative"
              aria-label={isPlaying ? '暂停' : '播放'}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              )}
              {isPlaying && (
                <span className="absolute inset-0 rounded-full animate-ping bg-[#d4af37]/30" />
              )}
            </button>

            <div className="flex flex-col justify-center min-w-[90px]">
              <span className="text-[#f1f5f9] text-sm font-medium leading-tight">
                {SONG_NAME}
              </span>
              <span className="text-[#64748b] text-xs leading-tight">
                {ARTIST_NAME}
              </span>
              <div className="mt-1">
                <SoundWaves isPlaying={isPlaying} count={5} barHeight={16} />
              </div>
            </div>

            <button
              onClick={toggleMute}
              className="text-[#94a3b8] hover:text-[#d4af37] transition-colors p-1"
              aria-label={isMuted ? '取消静音' : '静音'}
            >
              <VolumeIcon isMuted={isMuted} volume={volume} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
