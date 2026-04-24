import {test, expect} from '@playwright/test'

export class ArbStatusReportPage {
    constructor(page) {
      this.page = page;
  
      // Dropdowns
      this.practiceDropdown = page.locator('//label[text()="Practice Name"]/following::div[contains(@class,"select")][1]');
      this.lawyerDropdown = page.locator('//label[text()="Lawyer Name"]/following::div[contains(@class,"select")][1]');
      this.statusDropdown = page.locator('//label[text()="Status"]/following::div[contains(@class,"select")][1]');
      this.subStatusDropdown = page.locator('//label[text()="Sub Status"]/following::div[contains(@class,"select")][1]');
  
      // Date fields
      this.sentFrom = page.locator('//input[@placeholder="MM/DD/YYYY"][1]');
      this.sentTo = page.locator('//input[@placeholder="MM/DD/YYYY"][2]');
      this.statusFrom = page.locator('//input[@placeholder="MM/DD/YYYY"][3]');
      this.statusTo = page.locator('//input[@placeholder="MM/DD/YYYY"][4]');
  
      // Buttons
      this.applyFiltersBtn = page.locator('//button[text()="Apply Filters"]');
      this.exportBtn = page.locator('//button[text()="Export"]');
  
      // Results
      this.table = page.locator('//table');
      this.noDataText = page.locator('text=There are no records to display');
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async selectMultiValue(dropdown, values) {
      await dropdown.click();
  
      for (const value of values) {
        await this.page.locator(`//li[normalize-space()="${value}"]`).click();
      }
  
      await this.page.keyboard.press('Escape');
    }
  
    async setDateRange(fromLocator, toLocator, from, to) {
      await fromLocator.fill(from);
      await toLocator.fill(to);
    }
  
    async applyFilters() {
      await this.applyFiltersBtn.click();
    }
  
    async exportReport() {
      await this.exportBtn.click();
    }
  }
  
  module.exports = { ArbStatusReportPage };