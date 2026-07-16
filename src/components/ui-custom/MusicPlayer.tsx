'use client';

import { useState, useRef, useEffect } from 'react';

// 音频源：信乐团「天高地厚 - 信乐团」网易云音乐外链
// 注意：第三方外链稳定性不保证，建议后续下载到本地 public/music/ 目录
const AUDIO_URL = 'https://music.163.com/song/media/outer/url?id=387583';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [showVolume, setShowVolume] = useState(false);
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
        // 自动播放被阻止时的处理
        console.log('播放失败，请手动操作');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) setIsMuted(false);
    if (val === 0) setIsMuted(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // 音波跳动动画条 - 直接渲染为 JSX
  const soundWaves = (
    <div className="flex items-end gap-0.5 h-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="w-0.5 bg-[#d4af37] rounded-full"
          style={{
            height: isPlaying ? undefined : '4px',
            animation: isPlaying
              ? `soundWave 0.8s ease-in-out ${i * 0.12}s infinite`
              : undefined,
            opacity: isPlaying ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* 隐藏的音频元素 */}
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop
        preload="metadata"
      />

      {/* 播放器主体 - 固定右下角 */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="glass rounded-2xl border border-[rgba(212,175,55,0.25)] shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden">
          {/* 主体区域 */}
          <div className="flex items-center gap-3 px-4 py-3">
            {/* 播放/暂停按钮 */}
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
              {/* 播放时的光晕 */}
              {isPlaying && (
                <span className="absolute inset-0 rounded-full animate-ping bg-[#d4af37]/30" />
              )}
            </button>

            {/* 歌曲信息 + 音波 */}
            <div className="flex flex-col justify-center min-w-[90px]">
              <span className="text-[#f1f5f9] text-sm font-medium leading-tight">
                天高地厚
              </span>
              <div className="mt-0.5">
                {soundWaves}
              </div>
            </div>

            {/* 分隔线 */}
            <div className="w-px h-8 bg-[rgba(212,175,55,0.15)]" />

            {/* 音量按钮 */}
            <button
              onClick={() => setShowVolume(!showVolume)}
              onMouseEnter={() => setShowVolume(true)}
              className="w-9 h-9 rounded-full hover:bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[#94a3b8] hover:text-[#d4af37] transition-colors"
              aria-label="音量"
            >
              {isMuted || volume === 0 ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : volume < 0.5 ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>

          {/* 音量滑块展开 */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              showVolume ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-3 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="text-[#64748b] hover:text-[#d4af37] transition-colors flex-shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1.5 bg-[#1e293b] rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d4af37]
                    [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md
                    [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-[#d4af37]"
                  style={{
                    background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${(isMuted ? 0 : volume) * 100}%, #1e293b ${(isMuted ? 0 : volume) * 100}%, #1e293b 100%)`,
                  }}
                />
                <button
                  onClick={() => { setVolume(1); setIsMuted(false); }}
                  className="text-[#64748b] hover:text-[#d4af37] transition-colors flex-shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 移动端简化版 - 小屏幕只显示圆形按钮 */}
        <div className="sm:hidden absolute bottom-0 right-0">
          {/* 桌面端已显示完整组件，移动端也使用完整组件 */}
        </div>
      </div>
    </>
  );
}
