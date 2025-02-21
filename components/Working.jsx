import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import how from "@/constants/how";
const Working = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-950 font-bold text-center mt-8"><span className="text-purple-500">How To Use</span></h1>
      <div className="min-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {how.map((feature) => (
                <Card key={feature.title} className="">
                <CardHeader>
                  <div className="flex items-center gap-2">
                      <CardTitle className="text-purple-500">{feature.step}</CardTitle>
                      <CardDescription>{feature.title}</CardDescription>
                  </div>
                  <CardContent>{feature.description}</CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
      </div>
    </>
  );
};

export default Working;
