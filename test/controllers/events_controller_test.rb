require "test_helper"

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
    sign_in users(:brian)
  end

  test "should get index" do
    sign_out(:brian)
    get events_url
    assert_response :success
  end

  test "should redirect new if not logged in" do
    get new_event_url
    assert_response :success
  end

  test "should create event" do
    assert_difference("Event.count") do
      post events_url, params: { event: { end_time: @event.end_time, location: @event.location, name: @event.name, start_time: @event.start_time } }
    end

    assert_redirected_to event_url(Event.last)
  end

  test "should show event" do
    sign_out(:brian)
    get event_url(@event)
    assert_response :success
  end

  test "should redirect edit if not logged in" do
    get edit_event_url(@event)
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { end_time: @event.end_time, location: @event.location, name: @event.name, start_time: @event.start_time } }
    assert_redirected_to event_url(@event)
  end

  test "should destroy event" do
    assert_difference("Event.count", -1) do
      delete event_url(@event)
    end

    assert_redirected_to events_url
  end
end
