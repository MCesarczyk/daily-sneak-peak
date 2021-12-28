require "application_system_test_case"

class ChildrenTest < ApplicationSystemTestCase
  setup do
    @child = children(:one)
  end

  test "visiting the index" do
    visit children_url
    assert_selector "h1", text: "Children"
  end

  test "creating a Child" do
    visit children_url
    click_on "New Child"

    fill_in "Breakfast", with: @child.breakfast
    fill_in "Comment", with: @child.comment
    fill_in "Dates", with: @child.dates
    fill_in "Name", with: @child.name
    fill_in "Secondcourse", with: @child.secondcourse
    fill_in "Sleep", with: @child.sleep
    fill_in "Snack", with: @child.snack
    fill_in "Souptime", with: @child.souptime
    fill_in "Supplies", with: @child.supplies
    fill_in "Surname", with: @child.surname
    click_on "Create Child"

    assert_text "Child was successfully created"
    click_on "Back"
  end

  test "updating a Child" do
    visit children_url
    click_on "Edit", match: :first

    fill_in "Breakfast", with: @child.breakfast
    fill_in "Comment", with: @child.comment
    fill_in "Dates", with: @child.dates
    fill_in "Name", with: @child.name
    fill_in "Secondcourse", with: @child.secondcourse
    fill_in "Sleep", with: @child.sleep
    fill_in "Snack", with: @child.snack
    fill_in "Souptime", with: @child.souptime
    fill_in "Supplies", with: @child.supplies
    fill_in "Surname", with: @child.surname
    click_on "Update Child"

    assert_text "Child was successfully updated"
    click_on "Back"
  end

  test "destroying a Child" do
    visit children_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Child was successfully destroyed"
  end
end
