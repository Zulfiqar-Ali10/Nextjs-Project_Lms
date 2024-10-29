// src/components/Dialogs/TrainerModal.js
"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for Courses
const courses = [
  { id: "course1", name: "Web and App Development" },
  { id: "course2", name: "App Development" },
  { id: "course3", name: "Data Science" },
  { id: "course4", name: "UI/UX Design" },
];

export function TrainerModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true; // Adjust this based on your responsive logic

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Trainer</DialogTitle>
          </DialogHeader>
          <TrainerForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Trainer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Trainer</DrawerTitle>
        </DrawerHeader>
        <TrainerForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TrainerForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      {/* Trainer Name */}
      <div className="grid gap-2">
        <Label htmlFor="trainerName">Trainer Name</Label>
        <Input required type="text" id="trainerName" />
      </div>

      {/* Experience */}
      <div className="grid gap-2">
        <Label htmlFor="experience">Experience</Label>
        <Input required type="text" id="experience" placeholder="e.g. 5 years" />
      </div>

      {/* Email */}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" />
      </div>

      {/* Course */}
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.name}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Add Trainer</Button>
    </form>
  );
}
