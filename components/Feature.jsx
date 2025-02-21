'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import feature from "@/constants/features"

const Feature = () => {



  return (
    < >
    <h1 className="text-4xl text-blue-950 font-bold text-center mt-8"><span className="text-purple-500">Features</span></h1>
    <div className="min-h-[70vh]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          {feature.map((feature) => (
              <Card key={feature.title} className="">
              <CardHeader>
                <CardTitle className="text-purple-500">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
    </>
  );
};

export default Feature;
