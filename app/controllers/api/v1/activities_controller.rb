class Api::V1::ActivitiesController < ApplicationController
    before_action :set_child, only: [:show, :edit, :update, :destroy]

    def index
        @child = Child.find(params[:child_id])
        @activities = @child.activities.all.order(id: :desc)
        render json: @activities
    end

    def show
        @child = Child.find(params[:child_id])
        @activity = @child.activities.find(params[:id])
        render json: @activity
    end

    def new
        @activity = Activity.new
    end

    def create
        @child = Child.find(params[:child_id])
        @activity = @child.activities.new(activity_params)

        if @activity.save
            render json: @activity
        else
            render json: @activity.errors
        end
    end

    def update
        @child = Child.find(params[:child_id])
        @activity = @child.activities.find(params[:id])
        
        if @activity.update(activity_params)
          render json: { notice: 'Activity was successfully updated.' }
        end
    end

  private
      def activity_params
          params.require(:activity).permit(:breakfast, :soup, :second, :snack, :sleep, :pee, :poo, :supplies, :comment, :child_id)
      end

      def set_child
        @child = Child.find(params[:child_id])
      end
end