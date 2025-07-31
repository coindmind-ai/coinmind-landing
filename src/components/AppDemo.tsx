'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'

const expenses = [
  150, 89, 234, 67, 189, 145, 78, 256, 123, 98, 167, 234, 89, 156, 234, 78, 145, 189, 123, 167, 234, 89, 156, 234, 78, 145, 189, 123, 167, 234, 89, 156, 234
]
const maxExpense = Math.max(...expenses)
const minExpense = Math.min(...expenses)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  activePointIndex: number | null
  onChangeActivePointIndex: (index: number | null) => void
  width: number
  height: number
  paddingX?: number
  paddingY?: number
  gridLines?: number
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef<React.ElementRef<'svg'>>(null)
  let pathRef = useRef<React.ElementRef<'path'>>(null)
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points: Array<{ x: number; y: number }> = []

  for (let index = 0; index < expenses.length; index++) {
    let x = paddingX + (index / (expenses.length - 1)) * width
    let y =
      paddingY +
      (1 - (expenses[index] - minExpense) / (maxExpense - minExpense)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex: number | null = null
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D96B2B" />
          <stop offset="100%" stopColor="#D96B2B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#D96B2B', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          if (pathRef.current && typeof pathLength === 'number') {
            pathWidth.set(
              pathRef.current.getPointAtLength(
                pathLength * pathRef.current.getTotalLength(),
              ).x,
            )
          }
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#D96B2B"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#D96B2B"
          />
        </>
      )}
    </svg>
  )
}

export function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState<number | null>(null)
  let activeExpenseIndex = activePointIndex ?? expenses.length - 1
  let activeValue = expenses[activeExpenseIndex]
  let previousValue = expenses[activeExpenseIndex - 1]
  let percentageChange =
    activeExpenseIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs/6 text-gray-500">CoinMind</div>
            <div className="text-sm text-gray-900">Cash Flow</div>
            <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tracking-tight text-gray-900 tabular-nums">
                ${activeValue.toFixed(2)}
              </div>
              <div className="text-sm text-gray-900">USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    'ml-auto text-sm tracking-tight tabular-nums',
                    percentageChange >= 0 ? 'text-red-500' : 'text-green-500',
                  )}
                >
                  {`${
                    percentageChange >= 0 ? '+' : ''
                  }${percentageChange.toFixed(1)}%`}
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <div>1D</div>
              <div>5D</div>
              <div className="font-semibold text-gray-900">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-black/5 ring-inset">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white">
              Add Transaction
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Income</div>
                <div className="font-medium text-green-600">$2,450.00</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Expenses</div>
                <div className="font-medium text-red-600">$1,234.56</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Balance</div>
                <div className="font-medium text-gray-900">$1,215.44</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
