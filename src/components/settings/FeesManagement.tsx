
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TuitionFees } from './fees/TuitionFees';
import { UniformFees } from './fees/UniformFees';
import { OtherFees } from './fees/OtherFees';
import { SchoolSupplies } from './fees/SchoolSupplies';

export const FeesManagement = () => {
  const [activeTab, setActiveTab] = useState('tuition');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fees & Pricing Management</CardTitle>
        <CardDescription>
          Manage all school fees, uniforms, and other requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="tuition">Tuition Fees</TabsTrigger>
            <TabsTrigger value="uniforms">Uniforms</TabsTrigger>
            <TabsTrigger value="other">Other Fees</TabsTrigger>
            <TabsTrigger value="supplies">School Supplies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tuition">
            <TuitionFees />
          </TabsContent>
          
          <TabsContent value="uniforms">
            <UniformFees />
          </TabsContent>
          
          <TabsContent value="other">
            <OtherFees />
          </TabsContent>
          
          <TabsContent value="supplies">
            <SchoolSupplies />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
