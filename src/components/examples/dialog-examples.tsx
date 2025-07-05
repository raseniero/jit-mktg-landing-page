'use client';

import * as React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { Textarea } from '../ui/textarea';
import { AlertCircle, Info, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function DialogExamples() {
  return (
    <div className="w-full space-y-8 p-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Dialog Component Examples</h2>
        <p className="text-muted-foreground mb-8">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Basic Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Dialog</CardTitle>
            <CardDescription>A simple dialog with title and description.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Dialog with Form */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog with Form</CardTitle>
            <CardDescription>A dialog containing a form for user input.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Dialog with Scrollable Content */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog with Scrollable Content</CardTitle>
            <CardDescription>A dialog with long content that scrolls.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>View Terms</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[600px]">
                <DialogHeader>
                  <DialogTitle>Terms of Service</DialogTitle>
                  <DialogDescription>
                    Please read our terms of service carefully.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">1. Acceptance of Terms</h4>
                    <p className="text-sm text-muted-foreground">
                      By accessing and using this service, you accept and agree to be bound by the terms
                      and provision of this agreement.
                    </p>
                    <h4 className="text-sm font-medium">2. Use License</h4>
                    <p className="text-sm text-muted-foreground">
                      Permission is granted to temporarily download one copy of the materials
                      (information or software) on our service for personal, non-commercial transitory
                      viewing only.
                    </p>
                    <h4 className="text-sm font-medium">3. Disclaimer</h4>
                    <p className="text-sm text-muted-foreground">
                      The materials on our service are provided on an 'as is' basis. We make no
                      warranties, expressed or implied, and hereby disclaim and negate all other
                      warranties including, without limitation, implied warranties or conditions of
                      merchantability, fitness for a particular purpose, or non-infringement of
                      intellectual property or other violation of rights.
                    </p>
                    <h4 className="text-sm font-medium">4. Limitations</h4>
                    <p className="text-sm text-muted-foreground">
                      In no event shall our company or its suppliers be liable for any damages
                      (including, without limitation, damages for loss of data or profit, or due to
                      business interruption) arising out of the use or inability to use the materials on
                      our service, even if we or our authorized representative has been notified orally
                      or in writing of the possibility of such damage. Because some jurisdictions do not
                      allow limitations on implied warranties, or limitations of liability for
                      consequential or incidental damages, these limitations may not apply to you.
                    </p>
                  </div>
                </ScrollArea>
                <DialogFooter>
                  <Button variant="outline">Decline</Button>
                  <Button>Accept</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Alert Dialog Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Dialog Pattern</CardTitle>
            <CardDescription>A dialog for critical actions with clear consequences.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <DialogTitle>Delete Account</DialogTitle>
                  </div>
                  <DialogDescription className="text-destructive-foreground">
                    This action is irreversible. All your data will be permanently deleted.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Please type <Badge variant="secondary">DELETE</Badge> to confirm.
                  </p>
                  <Input className="mt-2" placeholder="Type DELETE to confirm" />
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Confirmation Dialog Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Confirmation Dialog</CardTitle>
            <CardDescription>A dialog for confirming user actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Submit Order</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Your Order</DialogTitle>
                  <DialogDescription>
                    Please review your order details before confirming.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Product Total</span>
                    <span className="text-sm font-medium">$99.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Shipping</span>
                    <span className="text-sm font-medium">$9.99</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Total</span>
                    <span className="font-medium">$109.98</span>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Go Back</Button>
                  <Button>Confirm Order</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Dialog with Custom Animation */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog with Loading State</CardTitle>
            <CardDescription>A dialog that shows loading state during async operations.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoadingDialog />
          </CardContent>
        </Card>

        {/* Dialog with Complex Layout */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog with Complex Layout</CardTitle>
            <CardDescription>A dialog with multiple sections and complex content.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create Project</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Set up a new project with your preferred configuration.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input id="project-name" placeholder="My Awesome Project" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Project Type</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="cursor-pointer hover:border-primary">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">🌐</div>
                          <p className="text-sm font-medium">Web App</p>
                        </CardContent>
                      </Card>
                      <Card className="cursor-pointer hover:border-primary">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <p className="text-sm font-medium">Mobile App</p>
                        </CardContent>
                      </Card>
                      <Card className="cursor-pointer hover:border-primary">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">🖥️</div>
                          <p className="text-sm font-medium">Desktop App</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Nested Dialogs Example */}
        <Card>
          <CardHeader>
            <CardTitle>Nested Dialogs</CardTitle>
            <CardDescription>A dialog that can open another dialog.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Settings</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Manage your application settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Account</p>
                      <p className="text-sm text-muted-foreground">Manage your account settings</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">Manage</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Account Settings</DialogTitle>
                          <DialogDescription>
                            Update your account information.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">
                            Account settings would go here...
                          </p>
                        </div>
                        <DialogFooter>
                          <Button>Save</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Responsive Dialog Example */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive Dialog</CardTitle>
            <CardDescription>A dialog that adapts to different screen sizes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Responsive Dialog</Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-full sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Responsive Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog adapts its width based on screen size.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex-col sm:flex-row">
                  <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                  <Button className="w-full sm:w-auto">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Loading Dialog Component
function LoadingDialog() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Save Changes</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Changes</DialogTitle>
          <DialogDescription>
            Are you sure you want to save these changes?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}