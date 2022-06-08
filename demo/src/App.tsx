import React from 'react';
import { ButtonBase } from '../../src';

const App = () => {
  return (
    <div className="container max-w-5xl m-auto px-4 space-y-20 my-20">
      <div className="grid gap-4 grid-cols-4">
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="lg" variant="primary">
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="md" variant="primary">
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="sm" variant="primary">
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="xs" variant="primary">
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-4">
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="lg" variant="outline primary">
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="outline primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="outline primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="md" variant="outline primary">
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="outline primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="outline primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="sm" variant="outline primary">
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="outline primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="outline primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="xs" variant="outline primary">
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="outline primary" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="outline primary" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline primary"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline primary"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline primary"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline primary"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="outline primary"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="outline primary"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-4">
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="lg" variant="outline gray">
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="outline gray" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="outline gray" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline gray"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline gray"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline gray"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="md" variant="outline gray">
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="outline gray" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="outline gray" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline gray"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline gray"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline gray"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="sm" variant="outline gray">
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="outline gray" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="outline gray" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline gray"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline gray"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline gray"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="xs" variant="outline gray">
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="outline gray" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="outline gray" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline gray"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline gray"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline gray"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="outline gray"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="outline gray"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="outline gray"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-4">
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="lg" variant="ghost">
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="ghost" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="lg" variant="ghost" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="ghost"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="ghost"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="ghost"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="lg"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="lg"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="lg"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="md" variant="ghost">
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="ghost" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="md" variant="ghost" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="ghost"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="ghost"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="ghost"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="md"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="md"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="md"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="sm" variant="ghost">
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="ghost" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="sm" variant="ghost" destructive>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="ghost"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="ghost"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="ghost"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="sm"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="sm"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="sm"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase size="xs" variant="ghost">
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="ghost" disabled>
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="ghost" destructive>
              Button
            </ButtonBase>
            <ButtonBase size="xs" variant="ghost" destructive disabled>
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="ghost"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              disabled
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            >
              Button
            </ButtonBase>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <ButtonBase
              size="xs"
              variant="ghost"
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="ghost"
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
            <ButtonBase
              size="xs"
              variant="ghost"
              destructive
              disabled
              iconEnd={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  data-testid="test"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
