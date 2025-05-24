import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ScriptGenerator() {
  const [inputType, setInputType] = useState("keyword");
  const [inputValue, setInputValue] = useState("");
  const [length, setLength] = useState("Standard");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setScript("");
    try {
      const res = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputType, inputValue, length }),
      });

      const data = await res.json();
      setScript(data.script || "Error: No script returned");
    } catch (err) {
      console.error(err);
      setScript("Error generating script");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📰 News Script Generator</h1>

      <div className="grid gap-4 mb-4">
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="keyword">Keyword</option>
          <option value="url">URL</option>
          <option value="file" disabled>File (coming soon)</option>
        </select>

        <Textarea
          rows={3}
          placeholder={`Enter your ${inputType}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <select
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Standard">Standard</option>
          <option value="1 Minute">1 Minute</option>
          <option value="5 Minute">5 Minute</option>
        </select>

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Script"}
        </Button>
      </div>

      {script && (
        <Card>
          <CardContent className="whitespace-pre-wrap p-4">
            {script}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
