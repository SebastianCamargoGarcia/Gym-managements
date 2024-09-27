"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const [clients, setClients] = useState([
    { 
      id: 1, 
      name: 'Juan Pérez', 
      plan: 'Anual', 
      lastPayment: '2023-01-01',
      endDate: '2023-12-31', 
      weight: 75, 
      diet: 'Baja en carbohidratos',
      paymentHistory: [
        { date: '2023-01-01', amount: 500, type: 'Anual' },
        { date: '2022-01-01', amount: 450, type: 'Anual' },
      ]
    },
    { 
      id: 2, 
      name: 'María García', 
      plan: 'Mensual', 
      lastPayment: '2023-05-01',
      endDate: '2023-05-31', 
      weight: 62, 
      diet: 'Vegetariana',
      paymentHistory: [
        { date: '2023-05-01', amount: 50, type: 'Mensual' },
        { date: '2023-04-01', amount: 50, type: 'Mensual' },
      ]
    },
  ])

  const [selectedClient, setSelectedClient] = useState(null)

  const handleViewDetails = (client) => {
    setSelectedClient(client)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-gray-800">GYM MANAGEMENTS</span>
            <div className="flex items-center">
              <div className="relative">
              </div>
            </div>
          </div>
        </div>
      </nav>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración del Gimnasio</h1>
      <Tabs defaultValue="clients">
        <TabsList>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
        </TabsList>
        <TabsContent value="clients">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Clientes</CardTitle>
              <CardDescription>Gestiona la información de los clientes del gimnasio</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Último Pago</TableHead>
                    <TableHead>Fecha de Finalización</TableHead>
                    <TableHead>Peso Actual</TableHead>
                    <TableHead>Dieta</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.plan}</TableCell>
                      <TableCell>{client.lastPayment}</TableCell>
                      <TableCell>{client.endDate}</TableCell>
                      <TableCell>{client.weight} kg</TableCell>
                      <TableCell>{client.diet}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => handleViewDetails(client)}>Ver Detalles</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Detalles del Cliente</DialogTitle>
                              <DialogDescription>Información detallada y opciones de edición</DialogDescription>
                            </DialogHeader>
                            {selectedClient && (
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">Nombre</Label>
                                  <Input id="name" value={selectedClient.name} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="plan" className="text-right">Plan</Label>
                                  <Select defaultValue={selectedClient.plan}>
                                    <SelectTrigger className="col-span-3">
                                      <SelectValue placeholder="Seleccionar plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Mensual">Mensual</SelectItem>
                                      <SelectItem value="Trimestral">Trimestral</SelectItem>
                                      <SelectItem value="Semestral">Semestral</SelectItem>
                                      <SelectItem value="Anual">Anual</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="lastPayment" className="text-right">Último Pago</Label>
                                  <Input id="lastPayment" value={selectedClient.lastPayment} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="endDate" className="text-right">Fecha de Finalización</Label>
                                  <Input id="endDate" value={selectedClient.endDate} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="weight" className="text-right">Peso</Label>
                                  <Input id="weight" value={selectedClient.weight} className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="diet" className="text-right">Dieta</Label>
                                  <Input id="diet" value={selectedClient.diet} className="col-span-3" />
                                </div>
                              </div>
                            )}
                            <DialogTrigger asChild>
                              <Button type="submit">Guardar cambios</Button>
                            </DialogTrigger>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Pagos</CardTitle>
              <CardDescription>Visualiza y gestiona los pagos de los clientes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Fecha de Pago</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Tipo de Plan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.flatMap(client => 
                    client.paymentHistory.map((payment, index) => (
                      <TableRow key={`${client.id}-${index}`}>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}