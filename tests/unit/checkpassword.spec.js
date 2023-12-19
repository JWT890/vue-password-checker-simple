import { shallowMount } from "@vue/test-utils";
import PasswordChecker from "@/components/PasswordChecker.vue";

describe("PasswordChecker", () => {
  it("should set password strength to 'Weak' for passwords with length less than 6", () => {
    const wrapper = shallowMount(PasswordChecker);
    wrapper.setData({ password: "abc" });
    wrapper.vm.checkPassword();
    expect(wrapper.vm.strength).toBe("Weak");
  });

  it("should set password strength to 'Medium' for passwords with length between 6 and 9", () => {
    const wrapper = shallowMount(PasswordChecker);
    wrapper.setData({ password: "abcdefgh" });
    wrapper.vm.checkPassword();
    expect(wrapper.vm.strength).toBe("Medium");
  });

  it("should set password strength to 'Strong' for passwords with length greater than or equal to 10", () => {
    const wrapper = shallowMount(PasswordChecker);
    wrapper.setData({ password: "abcdefghij" });
    wrapper.vm.checkPassword();
    expect(wrapper.vm.strength).toBe("Strong");
  });
});