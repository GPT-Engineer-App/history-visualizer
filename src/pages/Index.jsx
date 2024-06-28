import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <div className="flex justify-center mb-4">
          <Select onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="France">France</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <h1 className="text-3xl text-center">Welcome to the History Learning Tool</h1>
        <p className="text-center">
          Navigate through the sections to learn about historical events, relationships among important politicians, and timelines of historical events.
        </p>
        {selectedCountry && (
          <div className="mt-4 text-center">
            <h2 className="text-2xl">History of {selectedCountry}</h2>
            <p>Placeholder for historical information about {selectedCountry}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;