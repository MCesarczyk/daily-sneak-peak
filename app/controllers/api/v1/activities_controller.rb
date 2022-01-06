class Api::V1::ActivitiesController < ApplicationController
    before_action :set_activity, only: [:show, :edit, :update, :destroy]

    def index
        @activities = Activity.all
        render json: @activities
    end

    def show
        render json: @activity
    end

  private
      def activity_params
          params.require(:activity).permit(:breakfast, :soup, :second, :snack, :sleep, :pee, :poo, :supplies, :comment, :child_id)
      end

      def set_activity
        @activity = Activity.find(params[:id])
      end
end