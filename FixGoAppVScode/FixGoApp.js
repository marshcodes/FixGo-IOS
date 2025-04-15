import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Search } from 'lucide-react';

export default function FixGoApp() {
  const services = [
    'Plumbing', 'Cleaning', 'Electrical', 'HVAC', 'Locksmith', 'Handyman'
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-blue-600">FixGo</Text>

      {/* Service Categories */}
      <Text className="text-lg font-semibold mb-2">What do you need help with?</Text>
      <View className="grid grid-cols-2 gap-3 mb-6">
        {services.map(service => (
          <Card key={service} className="rounded-2xl shadow p-4 bg-orange-100">
            <CardContent>
              <Text className="text-center font-medium text-orange-800">{service}</Text>
            </CardContent>
          </Card>
        ))}
      </View>

      {/* Request Form */}
      <Text className="text-lg font-semibold mb-2">Request a Service</Text>
      <View className="space-y-4">
        <TextInput
          placeholder="Describe the issue..."
          className="border rounded-xl p-3"
        />
        <TextInput
          placeholder="Enter your address..."
          className="border rounded-xl p-3"
        />
        <Button className="w-full bg-blue-600 text-white py-3 rounded-2xl">
          <Search className="mr-2" /> Request Now
        </Button>
      </View>

      {/* Simulated Provider Response */}
      <View className="mt-8">
        <Text className="text-lg font-semibold mb-2 text-green-600">A provider is on the way!</Text>
        <View className="bg-blue-50 rounded-xl p-4 flex-row items-center justify-between">
          <View>
            <Text className="font-bold text-blue-800">John D.</Text>
            <Text className="text-gray-600">ETA: 8 mins</Text>
          </View>
          <MapPin className="text-blue-800" />
        </View>
      </View>
    </ScrollView>
  );
}
