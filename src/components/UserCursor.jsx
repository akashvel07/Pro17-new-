import React, { useEffect, useRef, useState } from 'react';
import './UserCursor.css';

/**
 * UserCursor Component
 * An interactive, spring-tracked Figma/OriginKit-style multiplayer cursor follower.
 * By default, keeps the native mouse 100% visible and adds a fluid trailing ring,
 * dynamic velocity-tilted user badge pill, context-aware hover states, and click ripples.
 */
export default function UserCursor({
  name = 'You',
  color = '#981B25', // Brand Primary Red
  secondaryColor = '#2D282A', // Brand Black
  showBadge = true,
  showFollower = true,
  showRipple = true,
  hideNativeCursor = false, // Set to true only if you want full cursor replacement
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [ripples, setRipples] = useState([]);

  const followerRef = useRef(null);
  const badgeRef = useRef(null);
  const pointerRef = useRef(null);

  // Position state refs for smooth 60–120fps RAF loop without re-renders
  const mousePos = useRef({ x: -200, y: -200 });
  const followerPos = useRef({ x: -200, y: -200 });
  const badgePos = useRef({ x: -200, y: -200 });
  const pointerPos = useRef({ x: -200, y: -200 });
  const velocity = useRef({ x: 0, y: 0 });
  const currentTilt = useRef(0);
  const lastMousePos = useRef({ x: -200, y: -200 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Enable optional body class if user explicitly wants native cursor hidden
    if (hideNativeCursor) {
      document.body.classList.add('hide-native-cursor');
    } else {
      document.body.classList.remove('hide-native-cursor');
    }

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Context-aware hover detection
      const target = e.target;
      if (target && target.closest) {
        const interactiveEl = target.closest(
          'a, button, input, textarea, select, [role="button"], [role="link"], .clickable, .interactive'
        );

        if (interactiveEl) {
          setIsHovering(true);
          const tagName = interactiveEl.tagName.toLowerCase();
          if (tagName === 'input' || tagName === 'textarea') {
            setHoverLabel('Type');
          } else if (interactiveEl.getAttribute('data-cursor-text')) {
            setHoverLabel(interactiveEl.getAttribute('data-cursor-text'));
          } else if (interactiveEl.classList.contains('card') || interactiveEl.closest('.card')) {
            setHoverLabel('View');
          } else {
            setHoverLabel('Click');
          }
        } else {
          setIsHovering(false);
          setHoverLabel('');
        }
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      if (showRipple) {
        const newRipple = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setRipples((prev) => [...prev.slice(-3), newRipple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 550);
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Spring & Lerp Physics RAF Loop
    let animId;
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Follower ring lerp (buttery smooth spring trailing)
      followerPos.current.x += (targetX - followerPos.current.x) * 0.22;
      followerPos.current.y += (targetY - followerPos.current.y) * 0.22;

      // Trailing Badge lerp (offset slightly to bottom-right of pointer)
      const badgeTargetX = targetX + 16;
      const badgeTargetY = targetY + 18;
      badgePos.current.x += (badgeTargetX - badgePos.current.x) * 0.16;
      badgePos.current.y += (badgeTargetY - badgePos.current.y) * 0.16;

      // Pointer tip lerp (if in custom cursor mode)
      pointerPos.current.x += (targetX - pointerPos.current.x) * 0.65;
      pointerPos.current.y += (targetY - pointerPos.current.y) * 0.65;

      // Velocity calculation for dynamic tilt
      velocity.current.x = targetX - lastMousePos.current.x;
      velocity.current.y = targetY - lastMousePos.current.y;
      lastMousePos.current.x = targetX;
      lastMousePos.current.y = targetY;

      // Clamped horizontal tilt (-18deg to 18deg)
      const targetTilt = Math.max(-18, Math.min(18, velocity.current.x * 0.35));
      currentTilt.current += (targetTilt - currentTilt.current) * 0.14;

      // Direct hardware-accelerated transform updates
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${badgePos.current.x}px, ${badgePos.current.y}px, 0) rotate(${currentTilt.current}deg)`;
      }

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${pointerPos.current.x}px, ${pointerPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('hide-native-cursor');
      if (animId) cancelAnimationFrame(animId);
    };
  }, [hideNativeCursor, showRipple]);

  return (
    <div
      className={`user-cursor-container ${!isVisible ? 'cursor-hidden' : ''}`}
      aria-hidden="true"
    >
      {/* Click ripple animations */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="user-cursor-ripple"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)`,
            borderColor: color,
          }}
        />
      ))}

      {/* Spring follower ring */}
      {showFollower && (
        <div
          ref={followerRef}
          className={`user-cursor-follower ${isHovering ? 'is-hovering' : ''} ${
            isClicking ? 'is-clicking' : ''
          }`}
          style={{
            borderColor: isHovering ? color : 'rgba(152, 27, 37, 0.45)',
          }}
        />
      )}

      {/* Full custom pointer (only rendered if hideNativeCursor is enabled) */}
      {hideNativeCursor && (
        <div
          ref={pointerRef}
          className={`user-cursor-pointer ${isHovering ? 'is-hovering' : ''} ${
            isClicking ? 'is-clicking' : ''
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cursorGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor={color} />
                <stop offset="1" stopColor={secondaryColor} />
              </linearGradient>
            </defs>
            <path
              d="M5.65 12.37H5.46L5.32 12.5L0.5 16.88V1.2L11.78 12.37H5.65Z"
              fill="url(#cursorGradient)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Trailing Name Pill Badge (Figma/OriginKit User Cursor) */}
      {showBadge && (
        <div
          ref={badgeRef}
          className={`user-cursor-badge ${isHovering ? 'is-hovering' : ''}`}
        >
          <span className="user-cursor-dot" />
          <span className="user-cursor-label">
            {isHovering && hoverLabel ? hoverLabel : name}
          </span>
        </div>
      )}
    </div>
  );
}
