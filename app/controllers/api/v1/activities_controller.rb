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

  private
      def activity_params
          params.require(:activity).permit(:breakfast, :soup, :second, :snack, :sleep, :pee, :poo, :supplies, :comment, :child_id)
      end

      def set_child
        @child = Child.find(params[:child_id])
      end
end