
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const signupSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  profession: z.enum(['student', 'academic', 'professional'], {
    required_error: 'Please select your profession',
  }),
  organization: z.string().optional(),
  feedback: z.string().optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupDialogProps {
  children: React.ReactNode;
}

const SignupDialog = ({ children }: SignupDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      profession: undefined,
      organization: '',
      feedback: '',
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup form submitted:', data);
    
    toast({
      title: "Welcome to Symposium!",
      description: "You're now on our early access list. We'll keep you updated on our progress!",
    });
    
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Join the Scientific Revolution
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Be part of reimagining academia with community, collaboration, and fair recognition at its core.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-teal/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>What you'll get:</strong> We'll keep you in the loop throughout Symposium's development process. 
            You'll be among the first to try new features, provide feedback, and help shape the future of academic collaboration. 
            Your insights will directly influence how we build this platform for the scientific community.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      {...field}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    What best describes you? *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <label htmlFor="student" className="text-sm font-medium cursor-pointer">
                          Student (Undergraduate, Graduate, PhD candidate)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="academic" id="academic" />
                        <label htmlFor="academic" className="text-sm font-medium cursor-pointer">
                          Academic (Professor, Researcher, Postdoc)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional" id="professional" />
                        <label htmlFor="professional" className="text-sm font-medium cursor-pointer">
                          Non-Academic Professional (Industry researcher, R&D, etc.)
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Organization/Institution (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Stanford University, Google Research, etc."
                      {...field}
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    What excites you most about Symposium? Any suggestions?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts about the project, what features you'd like to see, or any suggestions you have..."
                      className="min-h-[100px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-teal hover:bg-teal-light"
              >
                Join Early Access
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
