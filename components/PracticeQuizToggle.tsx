"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { getPracticeQuiz } from "@/app/actions/ai";
import { Loader } from "lucide-react";

export function PracticeQuiz() {
  const [loading, setLoading] = useState<boolean>(false);
  const [generated, setGenerated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await getPracticeQuiz("Generate 5 Quiz?", "cB5B243FF77n");
      // const res = await getPracticeQuiz("Generate 5 Quiz?", "cD42595D26An");
      // const messageXML = res.message;
      // const messageHTML = parseXMLToHTML(messageXML);
      // setQuiz(messageHTML);
      setGenerated(true);
      if (ref.current) {
        // ref.current.innerHTML =
        //   '<div class="text-6xl text-red-300">yooo babay</div>';
        ref.current.innerHTML = res.message;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="my_default">QuizQuesstions</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Practice Quiz</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div
            className="text-wrap bg-black max-h-[90vh] overflow-scroll"
            ref={ref}
          ></div>
          {loading ? (
            <Loader className="animate-spin h-6 w-6 text-gray-500" />
          ) : (
            <Button onClick={handleSubmit} type="submit" className="px-3">
              {generated ? "Submit" : "Generate Quiz"}
            </Button>
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
