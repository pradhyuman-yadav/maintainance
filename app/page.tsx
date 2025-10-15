// app/page.tsx

import { Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center">
          <Wrench className="h-12 w-12 text-muted-foreground" />
          <CardTitle className="mt-4 text-2xl font-bold tracking-tight">
            Platform Update in Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p className="mt-2">
              Due to a lack of resources and free time, this update might take
              some time. We appreciate your patience and understanding.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
