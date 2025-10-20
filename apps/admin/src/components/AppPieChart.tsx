"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { browser: "figure", sales: 275, fill: "var(--color-chrome)" },
  { browser: "fumo", sales: 200, fill: "var(--color-safari)" },
  { browser: "nendroid", sales: 287, fill: "var(--color-firefox)" },
  { browser: "wallpaper", sales: 173, fill: "var(--color-edge)" },
  { browser: "robot", sales: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  chrome: {
    label: "Figure",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Fumo",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Nendroid",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Wallpaper",
    color: "var(--chart-4)",
  },
  other: {
    label: "Robot",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function AppPieChart() {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <>
  <CardHeader className="items-center pb-0">
        <CardTitle>Popular Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-3 text-sm">
        
        <div className="text-muted-foreground leading-none text-center">
          Displaying a summary of the most popular categories based on last  month's sales.
        </div>
      </CardFooter>   
    </>
 
  )
}
