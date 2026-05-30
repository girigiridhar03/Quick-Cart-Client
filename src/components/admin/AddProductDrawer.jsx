import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Plus, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AddProductDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer">
          <Plus />
          ADD PRODUCT
        </Button>
      </DrawerTrigger>
      <DrawerContent className="rounded-none! md:w-[25%]! max-w-none!">
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center text-2xl font-semibold">
            <span>Add New Product</span>
            <DrawerClose asChild>
              <Button variant="ghost" className="cursor-pointer">
                {" "}
                <X />
              </Button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <Separator className="mb-3" />
        <div className="no-scrollbar overflow-y-auto px-4 h-full">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Payment Method</FieldLegend>
                <FieldDescription>
                  All transactions are secure and encrypted
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Name on Card
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Card Number
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-number-uw1"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <FieldDescription>
                      Enter your 16-digit card number
                    </FieldDescription>
                  </Field>
                  <div className="grid grid-cols-3 gap-4">
                    <Field>
                      <FieldLabel htmlFor="checkout-exp-month-ts6">
                        Month
                      </FieldLabel>
                      {/* <Select defaultValue="">
                        <SelectTrigger id="checkout-exp-month-ts6">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="01">01</SelectItem>
                            <SelectItem value="02">02</SelectItem>
                            <SelectItem value="03">03</SelectItem>
                            <SelectItem value="04">04</SelectItem>
                            <SelectItem value="05">05</SelectItem>
                            <SelectItem value="06">06</SelectItem>
                            <SelectItem value="07">07</SelectItem>
                            <SelectItem value="08">08</SelectItem>
                            <SelectItem value="09">09</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="11">11</SelectItem>
                            <SelectItem value="12">12</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select> */}
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                        Year
                      </FieldLabel>
                      {/* <Select defaultValue="">
                        <SelectTrigger id="checkout-7j9-exp-year-f59">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                            <SelectItem value="2029">2029</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select> */}
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                      <Input id="checkout-7j9-cvv" placeholder="123" required />
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldLegend>Billing Address</FieldLegend>
                <FieldDescription>
                  The billing address associated with your payment method
                </FieldDescription>
                <FieldGroup>
                  <Field orientation="horizontal">
                    {/* <Checkbox
                      id="checkout-7j9-same-as-shipping-wgm"
                      defaultChecked
                    /> */}
                    <FieldLabel
                      htmlFor="checkout-7j9-same-as-shipping-wgm"
                      className="font-normal"
                    >
                      Same as shipping address
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Comments
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-optional-comments"
                      placeholder="Add any additional comments"
                      className="resize-none"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
        <Separator className="mb-3" />
        <DrawerFooter className="flex-row items-center w-full">
          <Button
            variant="outline"
            className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer"
          >
            Cancel
          </Button>
          <Button className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddProductDrawer;
