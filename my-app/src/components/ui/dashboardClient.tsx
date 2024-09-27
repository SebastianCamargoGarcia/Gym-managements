"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function ClientDashboard() {
  const [clientData, setClientData] = useState({
    name: 'Juan Pérez',
    plan: 'Anual',
    weight: 75,
    diet: 'Baja en carbohidratos',
    weightHistory: [
      { date: '2023-01-01', weight: 80 },
      { date: '2023-02-01', weight: 78 },
      { date: '2023-03-01', weight: 76 },
      { date: '2023-04-01', weight: 75 },
    ]
  })

  return (
    
    
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mi Perfil de Gimnasio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Nombre:</strong> {clientData.name}</p>
            <p><strong>Plan Actual:</strong> {clientData.plan}</p>
            <p><strong>Peso Actual:</strong> {clientData.weight} kg</p>
            <p><strong>Dieta Recomendada:</strong> {clientData.diet}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Historial de Peso</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={400} height={300} data={clientData.weightHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Historial Detallado</CardTitle>
          <CardDescription>Registro de tus mediciones y progresos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Peso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientData.weightHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.weight} kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}