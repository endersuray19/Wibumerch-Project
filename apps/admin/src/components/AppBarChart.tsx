import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const AppBarChart = () => {
    const chartData = [
{ month: "January", total: 186, successful: 80 },
  { month: "February", total: 305, successful: 200 },
  { month: "March", total: 237, successful: 120 },
  { month: "April", total: 73, successful: 25 },
  { month: "May", total: 209, successful: 130 },
  { month: "June", total: 214, successful: 140 },
]
const chartConfig = {
  total: {
    label: "total",
    color: "#2563eb",
  },
  successful: {
    label: "successful",
    color: "#60a5fa",
  },
} satisfies ChartConfig
  return (
    <div>
        <h1 className='mb-5'>Total Revenues</h1>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false}/>
        <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value)=>value.slice(0,3)}
        />
        <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent/>}/>
        <ChartLegend content={<ChartLegendContent/>}/>
        <Bar dataKey="total" fill="var(--color-total)" radius={4} />
        <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

export default AppBarChart
